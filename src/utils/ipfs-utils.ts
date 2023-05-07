import { Web3Storage } from "web3.storage";

const access_token =
  process.env.NEXT_WEB3_STORAGE_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEI1YTFkOGQ3QzY5RTk2ODJkM0E4NGZFRmMzMTRlYUU2NzM3ZENFMDgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODM0NTA0MDc4MjQsIm5hbWUiOiJPUCBQbHVnaW4ifQ.VgXCjhzryb8i5Tn1GGUVyj-twmdiubP_NM1_TjSIyO4";

export function JSONtoFile(json: string, filename: string) {
  const blob = new Blob([json], { type: "application/json" });

  const files = [new File([blob], filename)];
  return files;
}

export async function storeFiles(files: File[]) {
  const client = new Web3Storage({ token: access_token });
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}
