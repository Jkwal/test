const renderUser = (user) => {
  const { title, first, last } = user.name;
  const { phone, email, picture, gender } = user;

  userContainer.innerHTML = `
            <h4>${title} ${first} ${last}</h4>
            <p>
                <img alt="${title} ${first} ${last} avatar" src="${picture.large}"/>
                <br/>
                <strong>Gender:</strong> ${gender}
                <br/>
                <strong>Email:</strong> ${email}
                <br/>
                <strong>Phone:</strong> ${phone}
            </p>
        `;
};