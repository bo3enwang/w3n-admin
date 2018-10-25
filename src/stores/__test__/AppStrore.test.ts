import AppStore from "../AppStore";

describe("AppStore", () => {
  it("creates new todos", () => {
    const store = new AppStore();
    store.login("admin", "admin");
    expect(store.isLogin).toBe(true);
  });
});
