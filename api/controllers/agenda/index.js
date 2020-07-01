module.exports = {


  friendlyName: 'Index',


  description: 'Index agenda.',


  inputs: {

  },


  exits: {
    success:{
      responseType: 'ok'
    },
  },


  fn: async function (inputs, exits) {
    var contacts = await Contacts.find();
    // All done.
    return exits.success(contacts);

  }


};
