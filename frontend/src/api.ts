/**
 * QuantumSafe API Client.
 *
 * Provides typed HTTP communication with the QuantumSafe FastAPI backend.
 * Uses configurable base URL via VITE_API_BASE_URL environment variable.
 */

export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
).replace(/\/+$/, '')

export type Risk =
  | 'High risk'
  | 'Lower quantum risk'
  | 'Quantum-safe'
  | 'Invalid use case'
  | 'Unknown algorithm'

export interface ReferenceItem {
  standard_id: string
  title: string
  published: string
  url: string
}

export interface AlgorithmMetadata {
  id: string
  name: string
  aliases: string[]
  family: string
  cryptographic_role: string
  standardization_status: string
  status_label: string
  description: string
  supported_roles: string[]
  valid_use_cases: string[]
  base_risk: Risk
  prioritization_score: number
  score_rationale: string
  explanation: string
  quantum_threat: string
  alternative: string
  reference: ReferenceItem
}

export interface AssessRequest {
  algorithm: string
  use_case: string
  key_size?: number
}

export interface AssessResponse {
  algorithm: string
  algorithm_id?: string
  family?: string
  use_case: string
  cryptographic_role?: string
  is_valid_use_case: boolean
  risk_level: Risk
  reason: string
  quantum_threat: string
  recommendation: string
  prioritization_score: number
  score_rationale: string
  standardization_status?: string
  status_label?: string
  references: ReferenceItem[]
  reference_citation?: string
  caveats: string
}

export interface InventoryRow {
  asset_name: string
  algorithm: string
  use_case: string
  risk_level: Risk
  recommendation: string
  prioritization_score: number
  score_rationale?: string
  reason?: string
  quantum_threat?: string
  is_valid_use_case?: boolean
  standardization_status?: string
  status_label?: string
  reference_citation?: string
  environment?: string
  owner?: string
  criticality?: string
  description?: string
  row_index?: number
  // Aliases for compatibility with legacy UI
  asset: string
  useCase: string
  risk: Risk
  alternative: string
}

export interface InventorySummary {
  high_risk: number
  lower_risk: number
  quantum_safe: number
  invalid_use_case: number
  unknown_algorithm: number
  average_prioritization_score: number
  high_risk_percentage: number
  quantum_safe_percentage: number
}

export interface InventoryUploadResponse {
  status: 'success' | 'partial_success' | 'error'
  message: string
  total_assets: number
  summary: InventorySummary
  assets: InventoryRow[]
  errors: string[]
  warnings: string[]
}

export interface ReportSummary {
  total_assets: number
  risk_distribution: Record<string, number>
  risk_percentages: Record<string, number>
  algorithm_distribution: Record<string, number>
  criticality_distribution: Record<string, number>
  recommendations_count: number
  average_prioritization_score: number
  high_priority_assets: Array<{
    asset_name: string
    algorithm: string
    risk_level: string
    score: number
  }>
  migration_guidance: string[]
}

export interface ReportSummaryResponse {
  status: string
  total_assets: number
  summary: ReportSummary
}

export interface HealthResponse {
  status: string
  version: string
  service: string
  backend_available: boolean
  active_inventory_count: number
  note?: string
}

/**
 * Handle HTTP error responses and extract readable error messages.
 */
async function handleHttpError(response: Response, defaultMessage: string): Promise<never> {
  let detail = ''
  try {
    const errorBody = await response.json()
    if (typeof errorBody.detail === 'string') {
      detail = errorBody.detail
    } else if (Array.isArray(errorBody.detail) && errorBody.detail.length > 0) {
      detail = errorBody.detail.map((e: any) => e.msg || JSON.stringify(e)).join(', ')
    } else if (errorBody.message) {
      detail = errorBody.message
    }
  } catch {
    // If not JSON, try text
    detail = await response.text().catch(() => '')
  }

  const message = detail ? `${defaultMessage}: ${detail}` : `${defaultMessage} (HTTP ${response.status})`
  throw new Error(message)
}

/**
 * Fetch backend health status.
 */
export async function checkBackendHealth(): Promise<HealthResponse> {
  const url = `${API_BASE_URL}/api/health`
  try {
    const res = await fetch(url)
    if (!res.ok) {
      return handleHttpError(res, 'Backend health check failed')
    }
    return await res.json()
  } catch (error: any) {
    throw new Error(`Unable to connect to QuantumSafe backend at ${url}. ${error.message || ''}`)
  }
}

/**
 * Fetch list of supported algorithms and their metadata from the backend.
 */
export async function fetchAlgorithms(): Promise<AlgorithmMetadata[]> {
  const url = `${API_BASE_URL}/api/algorithms`
  try {
    const res = await fetch(url)
    if (!res.ok) {
      return handleHttpError(res, 'Failed to fetch supported algorithms')
    }
    const data = await res.json()
    return data.algorithms || []
  } catch (error: any) {
    throw new Error(`Backend unavailable: ${error.message || 'Network error'}`)
  }
}

/**
 * Assess an algorithm and use case against quantum attacks.
 */
export async function assessAlgorithmApi(request: AssessRequest): Promise<AssessResponse> {
  const url = `${API_BASE_URL}/api/assess`
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
    if (!res.ok) {
      return handleHttpError(res, 'Algorithm assessment failed')
    }
    return await res.json()
  } catch (error: any) {
    throw new Error(`Assessment request failed: ${error.message || 'Network error'}`)
  }
}

/**
 * Upload and assess a CSV inventory file via multipart/form-data.
 */
export async function uploadInventoryCsvApi(file: File): Promise<InventoryUploadResponse> {
  const url = `${API_BASE_URL}/api/inventory/upload`
  const formData = new FormData()
  formData.append('file', file)

  try {
    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    if (!res.ok) {
      return handleHttpError(res, 'CSV inventory upload failed')
    }
    return await res.json()
  } catch (error: any) {
    throw new Error(`Upload failed: ${error.message || 'Network error'}`)
  }
}

/**
 * Fetch aggregated assessment summary metrics and guidance from the backend.
 */
export async function fetchReportSummaryApi(): Promise<ReportSummaryResponse> {
  const url = `${API_BASE_URL}/api/report/summary`
  try {
    const res = await fetch(url)
    if (!res.ok) {
      return handleHttpError(res, 'Failed to load report summary')
    }
    return await res.json()
  } catch (error: any) {
    throw new Error(`Failed to load report summary: ${error.message || 'Network error'}`)
  }
}

/**
 * Download the RFC-4180 CSV assessment audit report from the backend.
 */
export async function downloadReportCsvApi(): Promise<void> {
  const url = `${API_BASE_URL}/api/report/export`
  try {
    const res = await fetch(url)
    if (!res.ok) {
      return handleHttpError(res, 'Failed to download report')
    }

    // Extract filename from Content-Disposition header if available
    let filename = 'quantumsafe-assessment.csv'
    const disposition = res.headers.get('content-disposition')
    if (disposition && disposition.includes('filename=')) {
      const match = disposition.match(/filename=["']?([^"';]+)["']?/)
      if (match && match[1]) {
        filename = match[1]
      }
    }

    const blob = await res.blob()
    const blobUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = blobUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(blobUrl)
  } catch (error: any) {
    throw new Error(`CSV download failed: ${error.message || 'Network error'}`)
  }
}
