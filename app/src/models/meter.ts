export interface IMeter {
    id: string;
    name: string;
    category: string;
    unit: string;
    lastReading?: number;
}