function Register() {
  return (
    <div id="registerWrapper">
      <section>
        <h1>Register</h1>
        <div id="formWrapper">
          <form>
            <div id="registerCardBody">
              <div>
                <label htmlFor="username">Username:</label>
                <input name="username" id="username" type="text" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input name="email" id="email" type="text" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input name="password" id="password" type="password" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
