const Pagination = ({pagesArray, changePost, page}) =>{
    return  <div className="page__wrapper">
    {pagesArray.map((e) => (
      <p
        key={e}
        onClick={() => changePost(e)}
        className={page === e ? "page page__carrent" : "page"}
      >
        {e}
      </p>
    ))}
  </div>
}
export default Pagination;