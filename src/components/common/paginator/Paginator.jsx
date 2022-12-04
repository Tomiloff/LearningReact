// import React from "react";
// import styles from "./Paginator.module.css";


// const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

//   const pagesCount = Math.ceil(totalUsersCount / pageSize);

//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//       pages.push(i);
//     }

//   return (
//     <div>
//       {pages.map( page => {
//         return (
//           <span className={currentPage === page && styles.selectedPages} onClick={(e)=> {onPageChanged(page);}}> {page} </span>
//         );
//       })}
//     </div>
//   );
// };


// export default Paginator;






import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

  const pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={cn (styles.paginator)}>
      {portionNumber > 1 &&
      <button onClick={() => {setPortionNumber(portionNumber - 1) }}>PREV</button> }

      {pages
        .filter( page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map(page => {
          return (
            <span className={ cn ({
              [styles.selectedPage] : currentPage === page
            }, 
            styles.pageNumber)
          } key={page} onClick={(e) => {onPageChanged(page)}}>{page}</span>
          )
        })}
        {portionCount > portionNumber && 
          <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
    </div>
  );
};


export default Paginator;