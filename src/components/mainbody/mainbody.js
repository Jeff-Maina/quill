import "./mainbody.css";
function MainBody() {


  

  return (
    <section id="main-body">
      <div className="main-body-col stats-col">
        <div id="authors-box">
          <h1>Authors of the week</h1>
          <div className="author-pod">
            <div className="author-dp">
              <img src="https://i.pinimg.com/236x/5c/d9/76/5cd976f1dba517ab50e43745a8d45a76.jpg" />
            </div>
            <h4>Author name</h4>
          </div>
          <div className="author-pod">
            <div className="author-dp">
              <img src="https://i.pinimg.com/236x/89/7a/a2/897aa21b38792c02187a475b2a8c344e.jpg" />
            </div>
            <h4>Author name</h4>
          </div>{" "}
          <div className="author-pod">
            <div className="author-dp">
              <img src="https://i.pinimg.com/236x/11/83/97/11839740f4cb2763842c0f5eb5db055c.jpg" />
            </div>
            <h4>Author name</h4>
          </div>{" "}
          <div className="author-pod">
            <div className="author-dp">
              <img src="https://i.pinimg.com/236x/4e/d2/8a/4ed28a1cb621850ebc278d1dc8f215a7.jpg" />
            </div>
            <h4>Author name</h4>
          </div>{" "}
          <div className="author-pod">
            <div className="author-dp">
              <img src="https://i.pinimg.com/236x/b8/70/ad/b870ad3afa14942205e30f34e0a8164e.jpg" />
            </div>
            <h4>Author name</h4>
          </div>{" "}
          <div className="author-pod">
            <div className="author-dp">
              <img src="https://i.pinimg.com/236x/2c/82/a3/2c82a347c1e2191bba2ab9669be44d7b.jpg" />
            </div>
            <h4>Author name</h4>
          </div>{" "}
        </div>
        <div id="books-box">
          <h1>Books of the week</h1>
          <div className="book-pod">
            <div className="b-cover">
              <img src="https://i.pinimg.com/236x/a9/0e/83/a90e83b7343d6c3c7145c1a5fc26b7b1.jpg" />
            </div>
            <div className="b-details">
              <h3>Utopia</h3>
              <h4>By Louis Fernandez</h4>
            </div>
          </div>
          <div className="book-pod">
            <div className="b-cover">
              <img src="https://i.pinimg.com/564x/a8/cf/3c/a8cf3cd438999d0b96438006db602f18.jpg" />
            </div>
            <div className="b-details">
              <h3>Peter And The Wolf</h3>
              <h4>By Sergio Nunez</h4>
            </div>
          </div>
          <div className="book-pod">
            <div className="b-cover">
              <img src="https://i.pinimg.com/236x/fc/83/4b/fc834b390f340458bfc5ca1e4d4b6959.jpg" />
            </div>
            <div className="b-details">
              <h3>Sherlock Holmes</h3>
              <h4>By Paul Fabrizio</h4>
            </div>
          </div>{" "}
          <div className="book-pod">
            <div className="b-cover">
              <img src="https://i.pinimg.com/236x/57/96/fd/5796fd076835965e4657d8633d381dcf.jpg" />
            </div>
            <div className="b-details">
              <h3>Lord of the rings</h3>
              <h4>By Stephen Clark</h4>
            </div>
          </div>{" "}
          <div className="book-pod">
            <div className="b-cover">
              <img src="https://i.pinimg.com/236x/2f/67/16/2f6716cf33aff2bec88296e8d213011b.jpg" />
            </div>
            <div className="b-details">
              <h3>Taxi Driver</h3>
              <h4>By Bashooka Yo</h4>
            </div>
          </div>{" "}
          <div className="book-pod">
            <div className="b-cover">
              <img src="https://i.pinimg.com/236x/62/4d/23/624d2335fd28716d4d690a3cd12148c6.jpg" />
            </div>
            <div className="b-details">
              <h3>Macbeth</h3>
              <h4>By William Shakespeare</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="main-body-col books-col">
        <div id="books-col-header">
          <h1>Popular by genre</h1>
          <div id="genre-box">
            <span>
              <input type="checkbox" />
              <h5>All Genres</h5>
              <div className="g-indicator"></div>
            </span>
            <span>
              <input type="checkbox" />
              <h5>Business</h5>
              <div className="g-indicator"></div>
            </span>
            <span>
              <input type="checkbox" />
              <h5>Science</h5>
              <div className="g-indicator"></div>
            </span>
            <span>
              <input type="checkbox" />
              <h5>Fiction</h5>
              <div className="g-indicator"></div>
            </span>
            <span>
              <input type="checkbox" />
              <h5>Philosophy</h5>
              <div className="g-indicator"></div>
            </span>
            <span>
              <input type="checkbox" />
              <h5>Biography</h5>
              <div className="g-indicator"></div>
            </span>
          </div>
          <div id="g-dropdown">
            <select>
              <option>Option 1</option>
              <option>Option 1</option>
              <option>Option 1</option>
              <option>Option 1</option>
            </select>
          </div>
        </div>
        <div id="books-col-body">
          <div className="b-col-box">
            <div className="b-col-cover">
              <img
                src="https://i.pinimg.com/236x/0c/72/e3/0c72e3baac4b6807c025c45b47c2c0b4.jpg"
                alt=""
              />
            </div>
            <div className="b-col-book-details">
              <div className="grid-book-details">
                <h3>The Massive Whale</h3>
                <h4>by Moby Dick</h4>
                <div className="star-div"></div>
                <p>
                  Est in elit magna eu irure labore Lorem pariatur occaecat amet
                  proident incididunt ullamco. Consectetur est nisi ullamco amet
                  sunt nostrud duis nulla sit aliqua fugiat proident nisi. Non
                  anim ullamco do elit veniam esse pariatur exercitation
                  officia. Proident consectetur anim qui veniam irure sit ea.
                  Fugiat sit laboris elit incididunt pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="b-col-box">
            <div className="b-col-cover">
              <img
                src="https://i.pinimg.com/236x/ea/f1/d2/eaf1d2f2d68a2cf606c11676257c86ac.jpg"
                alt=""
              />
            </div>
            <div className="b-col-book-details">
              <div className="grid-book-details">
                <h3>The Massive Whale</h3>
                <h4>by Moby Dick</h4>
                <div className="star-div"></div>
                <p>
                  Est in elit magna eu irure labore Lorem pariatur occaecat amet
                  proident incididunt ullamco. Consectetur est nisi ullamco amet
                  sunt nostrud duis nulla sit aliqua fugiat proident nisi. Non
                  anim ullamco do elit veniam esse pariatur exercitation
                  officia. Proident consectetur anim qui veniam irure sit ea.
                  Fugiat sit laboris elit incididunt pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="b-col-box">
            <div className="b-col-cover">
              <img
                src="https://i.pinimg.com/236x/eb/9e/8b/eb9e8b9e4185a0649e6eff2aba193c9c.jpg"
                alt=""
              />
            </div>
            <div className="b-col-book-details">
              <div className="grid-book-details">
                <h3>The Massive Whale</h3>
                <h4>by Moby Dick</h4>
                <div className="star-div"></div>
                <p>
                  Est in elit magna eu irure labore Lorem pariatur occaecat amet
                  proident incididunt ullamco. Consectetur est nisi ullamco amet
                  sunt nostrud duis nulla sit aliqua fugiat proident nisi. Non
                  anim ullamco do elit veniam esse pariatur exercitation
                  officia. Proident consectetur anim qui veniam irure sit ea.
                  Fugiat sit laboris elit incididunt pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="b-col-box">
            <div className="b-col-cover">
              <img
                src="https://i.pinimg.com/564x/3d/47/c8/3d47c88d5c2665ded24e806f04005c19.jpg"
                alt=""
              />
            </div>
            <div className="b-col-book-details">
              <div className="grid-book-details">
                <h3>The Massive Whale</h3>
                <h4>by Moby Dick</h4>
                <div className="star-div"></div>
                <p>
                  Est in elit magna eu irure labore Lorem pariatur occaecat amet
                  proident incididunt ullamco. Consectetur est nisi ullamco amet
                  sunt nostrud duis nulla sit aliqua fugiat proident nisi. Non
                  anim ullamco do elit veniam esse pariatur exercitation
                  officia. Proident consectetur anim qui veniam irure sit ea.
                  Fugiat sit laboris elit incididunt pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="b-col-box">
            <div className="b-col-cover">
              <img
                src="https://i.pinimg.com/564x/25/d5/a9/25d5a95e7c4978c40c7ed763ebf1274f.jpg"
                alt=""
              />
            </div>
            <div className="b-col-book-details">
              <div className="grid-book-details">
                <h3>The Massive Whale</h3>
                <h4>by Moby Dick</h4>
                <div className="star-div"></div>
                <p>
                  Est in elit magna eu irure labore Lorem pariatur occaecat amet
                  proident incididunt ullamco. Consectetur est nisi ullamco amet
                  sunt nostrud duis nulla sit aliqua fugiat proident nisi. Non
                  anim ullamco do elit veniam esse pariatur exercitation
                  officia. Proident consectetur anim qui veniam irure sit ea.
                  Fugiat sit laboris elit incididunt pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="b-col-box">
            <div className="b-col-cover">
              <img
                src="https://i.pinimg.com/564x/55/13/94/55139455523d5f0b0471ba4695f09756.jpg"
                alt=""
              />
            </div>
            <div className="b-col-book-details">
              <div className="grid-book-details">
                <h3>The Massive Whale</h3>
                <h4>by Moby Dick</h4>
                <div className="star-div"></div>
                <p>
                  Est in elit magna eu irure labore Lorem pariatur occaecat amet
                  proident incididunt ullamco. Consectetur est nisi ullamco amet
                  sunt nostrud duis nulla sit aliqua fugiat proident nisi. Non
                  anim ullamco do elit veniam esse pariatur exercitation
                  officia. Proident consectetur anim qui veniam irure sit ea.
                  Fugiat sit laboris elit incididunt pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBody;
