import React from "react";

import { HeaderCart, Footer } from "../components";
import { ProfileMain, Paginator } from "../components/Profile/index";

function Profile() {
  return (
    <div>
      <HeaderCart />
      <ProfileMain />
      {/* <Paginator /> */}
      <Footer />
    </div>
  );
}

export default Profile;
