import React from "react";
import Divider from "components/Divider";
import { City } from "./Components";

export default function Cities({ updateCity }) {
  return (
    <>
      <header className="flex w-full justify-between px-11 py-9 bg-white">
        <div className="font-medium">My Cities</div>
        <form className="hidden lg:flex flex-row " onClick={updateCity}>
          <City>brisbane</City>
          <Divider />
          <City>hobart</City>
          <Divider />
          <City>beijing</City>
          <Divider />
          <City>london</City>
        </form>
        <div className="lg:hidden">
          <select onChange={updateCity} className="font-light">
            <option value="brisbane">Brisbane</option>
            <option value="hobart">Hobart</option>
            <option value="beijing">beijing</option>
            <option value="london">London</option>
          </select>
        </div>
      </header>
    </>
  );
}
