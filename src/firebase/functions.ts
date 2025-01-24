import { collection, doc, setDoc } from "firebase/firestore";
import { Well } from "./types";
import { db } from "./config";

export async function addWell(well: Well) {
  const ref = doc(collection(db, "wells"));
  const data: Well = { ...well, id: ref.id };
  await setDoc(ref, data);
}
