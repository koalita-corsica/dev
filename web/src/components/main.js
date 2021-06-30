import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./content.module.css";

const Main = ({ children }) => (
  
  <div className={styles.content}>{children}
  </div>
  
);

export default Main;
