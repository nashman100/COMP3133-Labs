const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  username: {
    type: String,
    required: true,
    minlength: [4, 'Username must be at least 4 characters long']
  },

  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },

  address: {
    street: {
      type: String,
      required: true
    },
    suite: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[A-Za-z\s]+$/.test(v);
        },
        message: props => `${props.value} is not a valid city name! Only alphabets and spaces are allowed.`
      }
    },

    zipcode: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{5}-\d{4}$/.test(v);
        },
        message: props => `${props.value} is not a valid zipcode! Format must be "12345-1234".`
      }
    },

    geo: {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number,
        required: true
      }
    }
 },

    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d-\d{3}-\d{3}-\d{4}$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number! Format must be "1-123-123-1234".`
      }
    },

    website: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]*$/.test(v);
        },
        message: props => `${props.value} is not a valid URL! It should start with "http://" or "https://".`
      }
    },

    company: {
      name: {
        type: String,
        required: true
      },

      catchPhrase: {
        type: String,
        required: true
      },

      bs: {
        type: String,
        required: true
      }
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;