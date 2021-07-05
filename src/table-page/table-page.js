import React, { useState, useEffect } from "react";

import Nav from "../components/nav/nav";
import ReactPaginate from 'react-paginate';


import Posts from "../components/posts/posts";
import axios from "axios";

import Image4 from "../assets/rectangle-839.png";
import Image5 from "../assets/page-1.png";
import Image from "../assets/packing-list.png";
import Image1 from "../assets/trolley.png";
import Image2 from "../assets/boxes.png";
import Image6 from "../assets/shoppingcart.png";
import Image7 from "../assets/search.png";
import Image8 from "../assets/group-5.png";

import "./table-page.css";

const TablePage = () => {
  const [sidebar, setSidebar] = useState(false);
  const [Comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [CommentsPerPage] = useState(10);
  const [q, setQ] = useState("");
  const [sortType, setSort] = useState("")

  const showSidebar = () => setSidebar(!sidebar);
  const ascOrder  = () => setSort("asc");
  const dscOrder = () => setSort("dsc");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(res.data.slice(0,50));
      setLoading(false);
    };

    fetchPosts();
  }, []);

  function search(Comments){
    const columns = Comments[0] && Object.keys(Comments[0]);
    return Comments.filter((comment) =>
    columns.some(
      (column) => comment[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
    )
  }

  // Get current posts
  const pagesVisited = pageNumber * CommentsPerPage;

  // sort
  const sorted = Comments.sort((a,b) =>{
    const isReversed  = 
    (sortType === 'asc') ? 1: (sortType === 'dsc')? -1: null;
    return isReversed * a.name.localeCompare(b.name)
  })

  const currentComment = search(sorted).slice(pagesVisited, pagesVisited + CommentsPerPage);

  const pageCount = Math.ceil(search(Comments).length / CommentsPerPage);

  // Change page
 const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

 


  return (
    <div class="wrap">
      <div className={sidebar ? "containerA1 active" : "containerA1"}>
        <div className={sidebar ? "bx active" : "bx"}>
          <div className={sidebar ? "rectangle1 active" : "rectangle1"}>
            <span className="logo">LOGO</span>
          </div>
        </div>

        <div className={sidebar ? "bx b1 active" : "bx b1"}>
          <img src={Image} alt="" />
          <p>PLACE AN ORDER</p>
        </div>
        <div className={sidebar ? "bx b2 active" : "bx b2"}>
          <img src={Image1} alt="" />
          <p>MY ORDER</p>
        </div>
        <div className={sidebar ? "bx b2 active" : "bx b3"}>
          <img src={Image2} alt="" />
          <p>INVENTORY</p>
        </div>
      </div>

      <div className={sidebar ? "containerB active" : "containerB "}>
        <div className={sidebar ? "nav2 active" : "nav2 "}>
          <div className="details">
            <img src={Image4} onClick={showSidebar} className="img1" alt="" />

            <img src={Image5} className="img2" alt="" />
            <p>
              <b>My Address</b>
              <br />
              Southbank, Great Wilson St, Leeds LS11 5AD, UK
            </p>
          </div>
          <Nav />
        </div>

        <div className={sidebar ? "containerB1 active" : "containerB1 "}>
          <p>Valves</p>

          <img src={Image6} alt="" />

          <div className="line2a"></div>
          <input className="search-box" name="text" type="text" value={q} onChange={(e) => setQ(e.target.value)} />
          <div className="sr-oval">
            <img src={Image7} className="search" alt="" />
          </div>
          <div className="line2b"></div>
          <div className="shp-btn">
            <div className="shp-crt">
              <img src={Image8} alt="" />
            </div>
            <div className="shp-crt1">
              <p>3</p>
            </div>
          </div>
        </div>
        <div className="containerB2">
          <div className={sidebar ? "griddd active" : "griddd"}>
            <div className="heading1" >
              <h3>Comments</h3>
              <div className="sort">
              <div className="btn-sort" onClick={ascOrder} ><p>ASC</p></div>
              <div className="btn-sort" onClick={dscOrder} ><p>DSC</p></div>
              </div>
              
            </div>
            <Posts comments={currentComment} loading={loading} />
            <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
            
          </div>
          <div className="footrr1">
            <p> © Con5 Online Ordering System, 2019 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
