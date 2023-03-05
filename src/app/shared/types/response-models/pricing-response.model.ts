export enum PlanType {
  FINANCE = 'finance',
  BALLOON = 'balloon',
  LEASE = 'lease',
  CASH = 'cash'
}

/**
 * Payment plan term pricing object
 */
export interface TermOptionResponse {
  /**
   * Length of term, measured in months
   */
  termLength: number;
  /**
   * Calculated monthly payment amount for term length
   */
  monthlyPaymentAmount: number;
  /**
   * Determines whether term is selected by default
   */
  isDefault: boolean;
}

/**
 * Payment plan configuration object
 */
export interface PricingSummaryResponse {
  /**
   * Plan category associated with pricing summary
   */
   planType: PlanType,
   termOptions: TermOptionResponse[];
}
