export interface activityInterface {
  title: string,
  period: {
    from: Date,
    to: Date
  },
  location: string,
  description: string,
  communication_drivers: string,
  audience: string,
  kols_engaged: Array<string>,
  no_of_hcps: string,
  status: string
}

export interface channelInterface {
  name : string,
  activities: [activityInterface]
}
