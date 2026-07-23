export interface RiskFactor {
    rule: string;
    weight: number;
    description: string;
}

export interface DriveFile {
    name: string;
    mimeType: string;
    webViewLink: string;
    sharedPublicly: boolean;
    lastModified: string;
    sizeBytes: string;
}

export interface RiskAnalysis {
    id: string;
    driveFileId: string;
    riskScore: number;
    riskLevel: string;
    riskFactors: RiskFactor[];
    generatedById: string;
    createdAt: string;
    driveFile: DriveFile;
}

export interface RiskBreakdown {
    LOW: number;
    MEDIUM: number;
    HIGH: number;
    CRITICAL: number;
}

export interface RiskSummary {
    overallRiskLevel: string;
    averageRiskScore: number;
    totalAnalyzed: number;
    breakdown: RiskBreakdown;
}

export interface PaginatedReports {
    data: RiskAnalysis[];
    total: number;
    page: number;
    pageSize: number;
}
