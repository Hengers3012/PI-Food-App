import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";

import styles from "./Detail_Page.module.css";

export default function DetailsPage() {
  const recipe_Details = useSelector((state) => state.detail);

  return (
    <div>
      <div className={styles.containeNav}>
        <NavBarTop />
      </div>
    </div>
  );
}
