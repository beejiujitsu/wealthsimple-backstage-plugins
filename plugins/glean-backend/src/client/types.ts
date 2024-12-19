export type GleanDocument = {
  id: DocumentId;
  title: string;
  container: EntityUri;
  datasource: string;
  viewURL: string;
  body: {
    mimeType: string;
    textContent: string;
  };
  updatedAt: number; // in epoch seconds
  permissions: { allowAnonymousAccess: boolean };
};

export type EntityUri = `${string & { __brand: 'S+/S+/S+' }}`;
export type DocumentId = `${EntityUri & { __brand: '/.+' }}`;
