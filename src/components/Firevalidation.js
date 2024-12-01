import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import LoginModal from "./Login";
import { LiaSignOutAltSolid } from "react-icons/lia";

const FireValid = () => {
  const [presentUser, setPresentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () =>setIsModalOpen(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          Uid: user.uid,
          email: user.email,
        });
      } else {
        setPresentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {presentUser ? 
      (
        <>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"  onClick={openModal}>
          {presentUser.email.charAt(0).toUpperCase()}
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
      <div className="p-4 text-dark rounded-3 logoutcricbuzz" aria-hidden="true"> 
               <p className="text-uppercase text-white overflow-auto">{presentUser.email} 
                 </p>
              <h1 className="display-3 text-white "> {presentUser.email.charAt(0).toUpperCase()}</h1>
              <h2 className="text-white">Hi,{presentUser.email.split("@")[0]}!</h2>
              <p className="manageaccount"><a href="#">Manage your Cricbuzz Account</a></p>
              <div className="logoutaddaccount">
              <button className="addaccount">Add Account</button>

                <button onClick={() => { auth.signOut().then(() => {alert("You have successfully logged out!");
                  });closeModal();
                  }} 
                  className="logout">
                  Log Out <LiaSignOutAltSolid className="fs-4" />
                </button>

                </div>
                 <p className="privacyterms">
                   <a href="#">Privacy Policy</a> -
                   <a href="#">Terms of Service</a>
                 </p>
             </div>
    
  </div>
</div>

        </>
      ) : (
        <LoginModal />
      )}
    </div>
  );
};

export default FireValid;
