enum Access {ADMIN = '123', MODERATOR = 345, USER = 111}

const student: {
  name: string;
  age: number;
  gender?: string;
  interest: string[];
  access : Access
} = {
  name: 'Juan',
  age: 19,
  interest: ['Basketball', 'Reading'],
  access : Access.ADMIN
};

if(student.access === '123'){
  console.log('is admin');
}

