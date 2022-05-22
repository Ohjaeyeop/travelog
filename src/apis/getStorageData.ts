import { listAll, ref } from "firebase/storage";
import { storage } from "../firebase";

const BASEURL = "gs://travelog-6afc5.appspot.com";

export const getStorageData = async (path?: string) => {
  return await listAll(ref(storage, `${BASEURL}${path ? `/${path}` : ""}`));
};
