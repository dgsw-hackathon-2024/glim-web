export interface UploadCommitteeData {
  title: string;
  contents: string;
}

export interface CommitteeResponse {
  id:number;
  title:string;
  contents:string;
  createdAt:Date;
  likes:number;
}