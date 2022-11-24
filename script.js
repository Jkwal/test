const renderUser = (user) => {
  const { title, first, last } = user.name;
  const { phone, email, picture } = user;

  const fullName = `${title} ${first} ${last}`;

  userContainer.innerHTML = `
        <h4>${fullName}</h4>
        <p>
            <img alt="${fullName} avatar" src="${picture.large}"/>
            <br/>
            <strong>Email:</strong> ${email}
            <br/>
            <strong>Phone:</strong> ${phone}
        </p>
    `;
};