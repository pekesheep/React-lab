import React from "react";
import { useForm } from "react-hook-form";
import { MembersTable } from "./members-table";
import useLocalStorageState from "use-local-storage-state";

export const InputOrg = () => {
  const [org, setOrg] = useLocalStorageState("lemoncode", {
    defaultValue: "lemoncode",
  });
  const { register, getValues } = useForm();

  return (
    <>
      <div className="input-container">
        <div>
          <span className="span-input">Introduzca una organización</span>
        </div>
        <div>
          <form>
            <input
              defaultValue={org}
              className="input-org"
              {...register("infoInput")}
            ></input>
            <button
              className="search-btn"
              type="button"
              onClick={() => {
                const singleValue = getValues("infoInput");
                setOrg(singleValue);
              }}
            >
              Cargar
            </button>
          </form>
        </div>
      </div>
      <MembersTable organization={org}></MembersTable>
    </>
  );
};
function useLocalStorage(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
