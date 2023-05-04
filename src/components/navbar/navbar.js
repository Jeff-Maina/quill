import React, { useState } from "react";
import "./navbar.css";

const UserMenu = ({ userMenuState }) => {
  return (
    <div id="usermenu-container" className={`user-menu-${userMenuState}`}>
      <div id="pointer"></div>
      <div className="option" id="profile-option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="33"
          id="profile"
        >
          <path
            fill="#231f20"
            d="M256 250.8a73.34 73.34 0 1 1 73.33-73.34A73.41 73.41 0 0 1 256 250.8zm0-125.53a52.2 52.2 0 1 0 52.19 52.19A52.25 52.25 0 0 0 256 125.27zm117.07 282.6H138.93l-10.57-10.57a127.64 127.64 0 1 1 255.28 0zM150 386.73h212a106.51 106.51 0 0 0-212 0z"
          ></path>
        </svg>
        <h3>Profile</h3>
      </div>
      <div className="option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
          id="settings"
        >
          <path d="M352 104c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16m0-16c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zM352 376c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16m0-16c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zM160 240c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16m0-16c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zM207.32 248H480v16H207.32c.439-2.604.68-5.273.68-8s-.24-5.396-.68-8zM112 256c0 2.727.24 5.396.68 8H32v-16h80.68a47.955 47.955 0 00-.68 8zM399.32 384H480v16h-80.68c.439-2.604.68-5.273.68-8s-.24-5.396-.68-8zM304 392c0 2.727.24 5.396.68 8H32v-16h272.68a47.955 47.955 0 00-.68 8zM399.32 112H480v16h-80.68c.439-2.604.68-5.273.68-8s-.24-5.396-.68-8zM304.68 112c-.439 2.604-.68 5.273-.68 8s.24 5.396.68 8H32v-16h272.68z"></path>
        </svg>
        <h3>Settings</h3>
      </div>
      <div className="option">
        <i className="material-symbols-outlined">logout</i>
        <h3>Logout</h3>
      </div>
    </div>
  );
};

function Navbar() {
  // handles the bokmarks menu section;

  const [isBookmarkMenuactive, setBookmarkMenuActive] = useState(false);
  const bookmarksState = isBookmarkMenuactive ? "active" : "inactive";
  let toggleBookmarkMenu = () => {
    setBookmarkMenuActive(!isBookmarkMenuactive);
  };

  // handles the notifications menu section;

  const [isNotificationactive, setNotificationMenuActive] = useState(false);
  const notificationMenuState = isNotificationactive ? "active" : "inactive";
  let toggleNotificationMenu = () => {
    setNotificationMenuActive(!isNotificationactive);
  };

  //   user menu section;

  const [isUseractive, setUserMenuActive] = useState(false);
  const userMenuState = isUseractive ? "active" : "inactive";
  let toggleUserMenu = () => {
    setUserMenuActive(!isUseractive);
  };

  return (
    <>
      <nav>
        <div className="navbar-section"></div>
        <div className="navbar-section"></div>
        <div className="navbar-section user-controls">
          <div className="user-control-option">
            <i
              onClick={() => {
                toggleBookmarkMenu();
              }}
              className="material-symbols-outlined"
            >
              bookmark
            </i>
            <div className="info-pod">
              <div className="info-pointer"></div>
              <div className="info-content">
                <h5>Bookmarks</h5>
              </div>
            </div>
          </div>
          <div className="user-control-option">
            <i
              onClick={() => {
                toggleNotificationMenu();
              }}
              className="material-symbols-outlined"
              id="new-notifications-icon"
            >
              notifications
            </i>
            <div className="info-pod">
              <div className="info-pointer"></div>
              <div className="info-content">
                <h5>Notifications</h5>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              toggleUserMenu();
            }}
            className="profile-image"
          ></div>
        </div>
              <div className={`bookmarks-container bookmarks-${bookmarksState}`}>
        <div id="bookmarks-header">
          <h5 id="bookmarks-title">BOOKMARKS</h5>
          <i
            onClick={() => {
              toggleBookmarkMenu();
            }}
            className="material-icons"
          >
            close
          </i>
        </div>
        <div id="bookmarked-books">
          <div className="bm-book">
            <i className="material-icons bm-view-icon">chevron_right</i>
            <div className="book-image">
              <img
                src="https://i.pinimg.com/564x/45/8f/d2/458fd2e7aff1091688d9d896fc977944.jpg"
                alt="img"
              />
            </div>
            <h6 className="bm-book-name">NINETEEN EIGHTY-FOUR</h6>
          </div>
          <div className="bm-book">
            <i className="material-icons bm-view-icon">chevron_right</i>
            <div className="book-image">
              <img
                src="https://i.pinimg.com/564x/e2/a3/d1/e2a3d16d9151e71deb263baec3fc896f.jpg"
                alt="img"
              />
            </div>
            <h6 className="bm-book-name">DUNE</h6>
          </div>
          <div className="bm-book">
            <i className="material-icons bm-view-icon">chevron_right</i>

            <div className="book-image">
              <img
                src="https://i.pinimg.com/564x/a7/5e/88/a75e882cb5f84a3078161bc61fe53140.jpg"
                alt="img"
              />
            </div>
            <h6 className="bm-book-name">THE MAJESTIES</h6>
          </div>
          <div className="bm-book">
            <i className="material-icons bm-view-icon">chevron_right</i>

            <div className="book-image">
              <img
                src="https://i.pinimg.com/564x/24/d0/4c/24d04ce74d47742265fa0d8236175f3d.jpg"
                alt="img"
              />
            </div>
            <h6 className="bm-book-name">HARRY POTTER SORCERER'S STONE</h6>
          </div>
          <div className="bm-book">
            <i className="material-icons bm-view-icon">chevron_right</i>

            <div className="book-image">
              <img
                src="https://i.pinimg.com/564x/5a/1e/09/5a1e09dbe92ab31e4ad110c7fc9ca0cb.jpg"
                alt="img"
              />
            </div>
            <h6 className="bm-book-name">THE INVISIBLE MAN</h6>
          </div>
          <div className="bm-book">
            <i className="material-icons bm-view-icon">chevron_right</i>

            <div className="book-image">
              <img
                src="https://i.pinimg.com/564x/94/8b/fb/948bfb274921a76cb28b9591dd04cb4b.jpg"
                alt="img"
              />
            </div>
            <h6 className="bm-book-name">WILDER GIRLS</h6>
          </div>
          <div className="bm-book">
            <i className="material-icons bm-view-icon">chevron_right</i>

            <div className="book-image">
              <img
                src="https://i.pinimg.com/564x/c2/e5/e3/c2e5e3a9d7bca5d24b75dfeed91e2b4f.jpg"
                alt="img"
              />
            </div>
            <h6 className="bm-book-name">ENCELADUS</h6>
          </div>
        </div>
      </div>
      <div
        className={`notifications-container notifications-${notificationMenuState}`}
      >
        <div id="notification-header">
          <h5 id="notification-title">NOTIFICATIONS</h5>
          <i
            onClick={() => {
              toggleNotificationMenu();
            }}
            className="material-icons"
          >
            close
          </i>
        </div>
        <div id="notifications-container">
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator error-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Failed to add bookmark.</h5>
              <h6>Now</h6>
            </div>
          </div>
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator success-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Successfully added new bookmark.</h5>
              <h6>4h ago</h6>
            </div>
          </div>
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator new-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>New bookmark available.</h5>
              <h6>8h ago</h6>
            </div>
          </div>
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator success-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Successfully deleted bookmark</h5>
              <h6>10h ago</h6>
            </div>
          </div>
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator error-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Failed to delete bookmark</h5>
              <h6>07 May 2018</h6>
            </div>
          </div>
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator error-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Failed to delete bookmark</h5>
              <h6>07 May 2018</h6>
            </div>
          </div>{" "}
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator error-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Failed to delete bookmark</h5>
              <h6>07 May 2018</h6>
            </div>
          </div>{" "}
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator error-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Failed to delete bookmark</h5>
              <h6>07 May 2018</h6>
            </div>
          </div>{" "}
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator error-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Failed to delete bookmark</h5>
              <h6>07 May 2018</h6>
            </div>
          </div>{" "}
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator error-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Failed to delete bookmark</h5>
              <h6>07 May 2018</h6>
            </div>
          </div>{" "}
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator error-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Failed to delete bookmark</h5>
              <h6>07 May 2018</h6>
            </div>
          </div>{" "}
          <div className="notification">
            <div className="notif-indicator">
              <div className="dot-indicator error-indicator"></div>
            </div>
            <div className="notif-content">
              <h5>Failed to delete bookmark</h5>
              <h6>07 May 2018</h6>
            </div>
          </div>
        </div>
      </div>
      </nav>
      <UserMenu
        setUserMenuActive={setUserMenuActive}
        userMenuState={userMenuState}
      />
    </>
  );
}

export default Navbar;
