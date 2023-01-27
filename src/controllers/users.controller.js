import { ObjectId } from "mongodb";
import db from "../server.js";

async function updateCart(request, response) {
  const { authorization } = request.headers;
  const { newIds } = request.body;

  try {
    console.log(newIds);

    return response.status(201).send(newIds);
  } catch (error) {
    console.log('error: ', error);

    return response.sendStatus(500);
  }
};

async function getCart(request, response) {
  const { authorization } = request.headers;
  console.log('token:', authorization)

  try {
    const users = await db.collection('users').find({}).toArray();
    console.log('users: ', users);
    const sessions = await db.collection('sessions').find({}).toArray();
    console.log('sessions: ', sessions);

    const session = await db.collection('sessions').findOne({ token: authorization });
    console.log('Session: ', session)
    const user = await db.collection('users').findOne({ _id: ObjectId(session.usuarioId) });

    if (!session || !user) return response.sendStatus(403);

    if (!user.cart) {
      user.cartIds = [];
    };

    return response.status(200).send(user);
  } catch (error) {
    console.log('Error: ', error);

    return response.status(500).send(error);
  }
};

export { getCart, updateCart };
