import { rest } from "msw";
import drinks from "../data/drinks.json";
import images from "../data/images/index.js";

const ACTIONS = ["add", "remove"];

function dumpCart() {
  const cart = [];
  for (let i = 0; i < sessionStorage.length; i += 1) {
    cart.push({
      id: Number(sessionStorage.key(i)),
      quantity: Number(sessionStorage.getItem(sessionStorage.key(i))),
    });
  }
  return cart;
}

export const handlers = [
  rest.get("/api/drinks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(drinks));
  }),

  rest.get("/api/drinks/:id", (req, res, ctx) => {
    const { id } = req.params;
    const drink = drinks.filter((drink) => drink.id === Number(id))[0];
    if (drink) {
      return res(ctx.status(200), ctx.json(drink));
    } else {
      return res(ctx.status(404), ctx.json({ message: "Not found" }));
    }
  }),

  rest.get("/api/drinks/:id/image", async (req, res, ctx) => {
    const { id } = req.params;
    const imageBuffer = images[Number(id) - 1];

    if (imageBuffer) {
      return res(
        ctx.set("Content-Length", imageBuffer.byteLength.toString()),
        ctx.set("Content-Type", "image/webp"),
        ctx.body(imageBuffer)
      );
    } else {
      return res(ctx.status(404), ctx.json({ message: "Not found" }));
    }
  }),

  rest.get("/api/cart", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dumpCart()));
  }),

  rest.post("/api/cart/:action", async (req, res, ctx) => {
    const { action } = req.params;
    const { id, quantity } = await req.json();

    if (!ACTIONS.includes(action)) {
      return res(ctx.status(404));
    }

    let currQuantity = sessionStorage.getItem(id);
    if (action === "remove" && !currQuantity) {
      return res(
        ctx.status(400),
        ctx.json({
          message: `Item not found: removing item id#${id} failed because it does not exist in the cart.`,
        })
      );
    }

    let newQuantity = Number(currQuantity || "0");
    switch (action) {
      case "add":
        newQuantity += quantity;
        break;
      case "remove":
        newQuantity -= quantity;
        break;
    }

    sessionStorage.setItem(id.toString(), newQuantity.toString());

    return res(ctx.status(200), ctx.json(dumpCart()));
  }),
];
