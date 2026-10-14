export type ZoneType = 'North' | 'West' | 'South' | 'East' | 'Central' | 'North-East' | 'Union Territory';

export interface StateEntity {
  code: string;
  name: string;
  type: 'state' | 'ut';
  zone: ZoneType;
  capital: string;
  ambassadorId?: string;
}

export const indianStatesAndUTs: StateEntity[] = [
  // NORTH
  { code: 'HP', name: 'Himachal Pradesh', type: 'state', zone: 'North', capital: 'Shimla', ambassadorId: 'astha-sharma' },
  { code: 'PB', name: 'Punjab', type: 'state', zone: 'North', capital: 'Chandigarh' },
  { code: 'HR', name: 'Haryana', type: 'state', zone: 'North', capital: 'Chandigarh', ambassadorId: 'diksha-makkar' },
  { code: 'UK', name: 'Uttarakhand', type: 'state', zone: 'North', capital: 'Dehradun' },
  { code: 'UP', name: 'Uttar Pradesh', type: 'state', zone: 'North', capital: 'Lucknow' },
  { code: 'DL', name: 'Delhi (NCT)', type: 'ut', zone: 'North', capital: 'New Delhi' },
  { code: 'CH', name: 'Chandigarh', type: 'ut', zone: 'North', capital: 'Chandigarh' },
  { code: 'JK', name: 'Jammu and Kashmir', type: 'ut', zone: 'North', capital: 'Srinagar / Jammu' },
  { code: 'LA', name: 'Ladakh', type: 'ut', zone: 'North', capital: 'Leh' },

  // WEST
  { code: 'RJ', name: 'Rajasthan', type: 'state', zone: 'West', capital: 'Jaipur', ambassadorId: 'dr-akhil-bhardwaj' },
  { code: 'GJ', name: 'Gujarat', type: 'state', zone: 'West', capital: 'Gandhinagar' },
  { code: 'MH', name: 'Maharashtra', type: 'state', zone: 'West', capital: 'Mumbai' },
  { code: 'GA', name: 'Goa', type: 'state', zone: 'West', capital: 'Panaji' },
  { code: 'DH', name: 'Dadra & Nagar Haveli and Daman & Diu', type: 'ut', zone: 'West', capital: 'Daman' },

  // CENTRAL
  { code: 'MP', name: 'Madhya Pradesh', type: 'state', zone: 'Central', capital: 'Bhopal' },
  { code: 'CG', name: 'Chhattisgarh', type: 'state', zone: 'Central', capital: 'Raipur' },

  // EAST
  { code: 'BR', name: 'Bihar', type: 'state', zone: 'East', capital: 'Patna' },
  { code: 'JH', name: 'Jharkhand', type: 'state', zone: 'East', capital: 'Ranchi' },
  { code: 'OD', name: 'Odisha', type: 'state', zone: 'East', capital: 'Bhubaneswar' },
  { code: 'WB', name: 'West Bengal', type: 'state', zone: 'East', capital: 'Kolkata' },

  // SOUTH
  { code: 'AP', name: 'Andhra Pradesh', type: 'state', zone: 'South', capital: 'Amaravati' },
  { code: 'KA', name: 'Karnataka', type: 'state', zone: 'South', capital: 'Bengaluru' },
  { code: 'KL', name: 'Kerala', type: 'state', zone: 'South', capital: 'Thiruvananthapuram' },
  { code: 'TN', name: 'Tamil Nadu', type: 'state', zone: 'South', capital: 'Chennai' },
  { code: 'TG', name: 'Telangana', type: 'state', zone: 'South', capital: 'Hyderabad' },
  { code: 'PY', name: 'Puducherry', type: 'ut', zone: 'South', capital: 'Puducherry' },
  { code: 'LD', name: 'Lakshadweep', type: 'ut', zone: 'South', capital: 'Kavaratti' },
  { code: 'AN', name: 'Andaman & Nicobar Islands', type: 'ut', zone: 'South', capital: 'Port Blair' },

  // NORTH-EAST
  { code: 'AS', name: 'Assam', type: 'state', zone: 'North-East', capital: 'Dispur' },
  { code: 'AR', name: 'Arunachal Pradesh', type: 'state', zone: 'North-East', capital: 'Itanagar' },
  { code: 'MN', name: 'Manipur', type: 'state', zone: 'North-East', capital: 'Imphal' },
  { code: 'ML', name: 'Meghalaya', type: 'state', zone: 'North-East', capital: 'Shillong' },
  { code: 'MZ', name: 'Mizoram', type: 'state', zone: 'North-East', capital: 'Aizawl' },
  { code: 'NL', name: 'Nagaland', type: 'state', zone: 'North-East', capital: 'Kohima' },
  { code: 'SK', name: 'Sikkim', type: 'state', zone: 'North-East', capital: 'Gangtok' },
  { code: 'TR', name: 'Tripura', type: 'state', zone: 'North-East', capital: 'Agartala' },
];

export const zonesList: ZoneType[] = [
  'North',
  'West',
  'Central',
  'East',
  'South',
  'North-East',
  'Union Territory',
];
