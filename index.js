const widgetsCollection = new Mongo.Collection('widgets');

widgetsCollection.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

if (Meteor.isClient) {
  widgetsCollection.remove({ _id: 'from-client' });
  widgetsCollection.insert({ _id: 'from-client', name: undefined });
  // Returns an object with name === undefined
  console.log(widgetsCollection.findOne('from-client'));
}

if (Meteor.isServer) {
  widgetsCollection.remove({ _id: 'from-server' });
  widgetsCollection.insert({ _id: 'from-server', name: undefined });
  // Returns an object with name === null
  console.log(widgetsCollection.findOne('from-server'));
}
