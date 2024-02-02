export interface TimestampValue {
  timestamp: number;
  value: number;
}

export interface Stats {
  slowWalletsOverTime: TimestampValue[];
  totalSupply: number;
  totalSlowWalletLocked: number;
}