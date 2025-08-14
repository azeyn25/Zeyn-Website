export interface Image {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string; // Artistic title of the photograph
  description?: string; // Technical/artistic description
  story?: string; // Personal story behind the photograph
  location?: string; // Where the photo was taken
  year?: string; // When the photo was taken
  camera?: string; // Camera/technical details
  edition?: string; // Edition information (e.g., "Limited to 25 prints")
}
