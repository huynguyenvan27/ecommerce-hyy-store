import jsonServer from 'json-server';
import cookieParser from 'cookie-parser';
import {join, dirname} from 'path';
import {Low, JSONFile} from 'lowdb';
import { fileURLToPath } from 'url';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults({
  bodyParser: true,
  noCors: true,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.data ||= { 
  products: [],
  users: []
};

db.write();

server.use(cookieParser());
server.use(middleware);

server.use((req, res, next) => {
  const {uid} = req.cookies;

  const user = db.data.users.find((user) => user.id == uid);

  req.user = user;
  next();
});

server.post('/api/signin', (req, res, next) => {
  const { username, password } = req.body;

  const user = db.data.users.find((user) => user.username == username && user.password == password);
  
  if (!user) {
    return res.status(404).jsonp({
	error: 'Tai khoan hoac mat khau khong dung'
    });
  } else {
    return res.status(200).cookie('uid', user.id, {maxAge: 10000, httpOnly: true}).jsonp(user);
  }
});

server.post('/api/signup', (req, res, next) => {
  const {username, password, firstname, lastname, email, phone} = req.body;

  const user = db.data.users.find((user) => user.username == username);

  if (user) {
    return res.status(400).jsonp({
      error: 'Tai khoan da ton tai'
    });
  } else {
    db.data.users.push({id: db.data.users.length + 1, username, password, firstname, lastname, email, phone, avatar: ''});
    db.write();
    const newUser = db.data.users[db.data.users.length - 1];
    
    return res.status(201).cookie('uid', newUser.id, {maxAge: 10000, httpOnly: true}).jsonp(newUser);
  }
});

server.use(router);

server.listen(3001, () => {
  console.log('JSON server is running');
});
