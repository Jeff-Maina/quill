import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  // handles the bokmarks section

  const [isBookmarkMenuactive, setBookmarkMenuActive] = useState(false);

  const bookmarksState = isBookmarkMenuactive ? "active" : "inactive";

  let toggleBookmarkMenu = () => {
    setBookmarkMenuActive(!isBookmarkMenuactive);
  };

  //

  const [isNotificationactive, setNotificationMenuActive] = useState(false);

  const notificationMenuState = isNotificationactive ? "active" : "inactive";

  let toggleNotificationMenu = () => {
    setNotificationMenuActive(!isNotificationactive);
  };

  return (
    <>
      <nav>
        <div className="navbar-section"></div>
        <div className="navbar-section"></div>
        <div className="navbar-section user-controls">
          <i
            onClick={() => {
              toggleBookmarkMenu();
            }}
            className="material-symbols-outlined"
          >
            bookmark
          </i>
          <i
            onClick={() => {
              toggleNotificationMenu();
            }}
            className="material-symbols-outlined"
            id="new-notifications-icon"
          >
            notifications
          </i>
          <div className="profile-image"></div>
        </div>
      </nav>

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
            </div>            <div className="notification">
                <div className="notif-indicator">
                    <div className="dot-indicator error-indicator"></div>
                </div>
                <div className="notif-content">
                    <h5>Failed to delete bookmark</h5>
                    <h6>07 May 2018</h6>
                </div>
            </div>            <div className="notification">
                <div className="notif-indicator">
                    <div className="dot-indicator error-indicator"></div>
                </div>
                <div className="notif-content">
                    <h5>Failed to delete bookmark</h5>
                    <h6>07 May 2018</h6>
                </div>
            </div>            <div className="notification">
                <div className="notif-indicator">
                    <div className="dot-indicator error-indicator"></div>
                </div>
                <div className="notif-content">
                    <h5>Failed to delete bookmark</h5>
                    <h6>07 May 2018</h6>
                </div>
            </div>            <div className="notification">
                <div className="notif-indicator">
                    <div className="dot-indicator error-indicator"></div>
                </div>
                <div className="notif-content">
                    <h5>Failed to delete bookmark</h5>
                    <h6>07 May 2018</h6>
                </div>
            </div>            <div className="notification">
                <div className="notif-indicator">
                    <div className="dot-indicator error-indicator"></div>
                </div>
                <div className="notif-content">
                    <h5>Failed to delete bookmark</h5>
                    <h6>07 May 2018</h6>
                </div>
            </div>            <div className="notification">
                <div className="notif-indicator">
                    <div className="dot-indicator error-indicator"></div>
                </div>
                <div className="notif-content">
                    <h5>Failed to delete bookmark</h5>
                    <h6>07 May 2018</h6>
                </div>
            </div>
            
        </div>
        <div className="mark-read">
                <h3>Mark all as read</h3>
             </div>
      </div>
    </>
  );
}

export default Navbar;
