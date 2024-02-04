import React from "react";
const Ressearcher = () => {
  return (
    <div className="res-sec container">
      <h2 className="res-head">Trouvez votre nom de domaine</h2>
      <form class="example" action="#">
        <div className="res-searchbar">
          <input type="text" placeholder="Search.." name="search2" />
          <button type="submit">RECHERCHER</button>
        </div>
      </form>
    </div>
  );
};

export default Ressearcher;
