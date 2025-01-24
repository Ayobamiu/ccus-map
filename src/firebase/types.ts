export interface Well {
  id: string; // Firestore ID or unique identifier
  apiNumber: number; // Primary key
  permitNumber: string;
  leaseName: string;
  wellNumber: string;
  latitude: number; // Decimal with 7 precision
  longitude: number; // Decimal with 7 precision
  elevationFt: number;
  priority: number;
  elevationDatum: string; // e.g., "Kelly Bushing"
  wellType: string; // e.g., "Dry Hole"
  status: string; // e.g., "Plugging Approved"
  completionDate: string; // ISO Date string
  surfaceLandUseType: string; // e.g., "Forest"
  measuredDepth: number;
  trueDepth: number;
  deepestFormation: string; // e.g., "Prairie Du Chien"
  deviation: string; // e.g., "Straight"
  targetZone: string; // e.g., "Prairie Du Chien"
  perfIntervals?: Record<string, string[]>; // JSONB equivalent
  acid: boolean;
  frac: boolean;
  injectionWell: boolean;
  typeFluidInjected?: string;
  issues?: string;
  showsDepths?: Record<string, Record<string, string>>; // JSONB equivalent
  h2s: boolean;
  comments?: string;
}

export interface Casing {
  id: string; // Firestore ID or unique identifier
  wellApiNumber: number; // Foreign key to Well
  type: string; // e.g., "Surface", "Intermediate", "Production"
  intervalFt: number;
  sizeIn: number; // Decimal
  bagsOfCement: number;
  cementType: string; // e.g., "Portland Cement"
}

export interface Plugging {
  id: string; // Firestore ID or unique identifier
  wellApiNumber: number; // Foreign key to Well
  plugType: string; // e.g., "Bridge Plug"
  plugDepthFt: number;
  plugIntervalFt: number;
  plugDetails: string; // Additional info
  pluggingDate: string; // ISO Date string
}

export interface County {
  id: string; // Firestore ID or unique identifier
  name: string; // e.g., "Kalamazoo"
  state: string; // e.g., "Michigan"
  region?: string; // Optional, e.g., "Midwest"
}
export interface WellCountyMapping {
  id: string; // Firestore ID or unique identifier
  wellApiNumber: number; // Foreign key to Well
  countyId: string; // Foreign key to County
}
