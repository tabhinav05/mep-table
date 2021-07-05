import React from "react";
import "./posts.css";

const Posts = ({ comments, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div className="">
      <table className="table">
        <tr className="dt-table">
        <th className="column4">
            <div className="head-row1">
              <p>Id</p>
            </div>
          </th>
          <th className="column1">
            <div className="head-row1">
              <p>Names</p>
            </div>
          </th>
          <th className="column2">
            <div className="head-row1">
              <p>E-mails</p>
            </div>
          </th>
          <th className="column3">
            <div className="head-row1">
              <p>Comments</p>
            </div>
          </th>
        </tr>

        {comments.map((comment) => (
          
            <tr key={comment.id} className="dt-table">
              <td className="column4">
                <div className="down-row1">
                  <p>{comment.id}</p>
                </div>
              </td>
              <td className="column1">
                <div className="down-row1">
                  <p>{comment.name}</p>
                </div>
              </td>
              <td className="column2">
                <div className="down-row1">
                  <p>{comment.email}</p>
                </div>
              </td>
              <td className="column3">
                <div className="down-row1">
                  <p>{comment.body}</p>
                </div>
              </td>
            </tr>
          
        ))}
      </table>
    </div>
  );
};

export default Posts;
