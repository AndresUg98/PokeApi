import React from "react";
import "./PokeCard.scss";
function PokeCard() {
  return (
    <div className="PokeCard-contianer">
      <figure className="PokeCard-img">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/654c7554-888a-4fff-bc61-5785cc9b7fa9/den9vqz-beba80ad-46c1-4e76-8ff7-1db623006d23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1NGM3NTU0LTg4OGEtNGZmZi1iYzYxLTU3ODVjYzliN2ZhOVwvZGVuOXZxei1iZWJhODBhZC00NmMxLTRlNzYtOGZmNy0xZGI2MjMwMDZkMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FakomyVVrKNDCX-V-7VIWzKsEZsC1YLNhs_aimOo2VQ"
          alt=""
          srcset=""
        />
      </figure>
      <p>Cyndaquil</p>
      <p>Fire</p>
    </div>
  );
}

export { PokeCard };
