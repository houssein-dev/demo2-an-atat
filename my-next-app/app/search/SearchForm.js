// app/search/SearchForm.js
"use client";

export default function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    window.location.href = `/search?query=${encodeURIComponent(query)}`;
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "auto", display: "flex", gap: ".5rem" }}>
      {/* <input
        type="search"
        name="query"
        placeholder="ابحث…"
        style={{ padding: ".4rem .6rem", border: "1px solid #ddd", borderRadius: ".4rem" }}
      /> */}
      <button type="submit" style={{ padding: ".4rem .6rem" }}>🔍</button>
    </form>
  );
}
