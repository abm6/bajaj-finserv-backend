const sendCount = async (req, res) => {
	const data = req.body.data;
	let totalCount = 0;

 
	const answer = {
		isSuccess: true,
		user_id: 'abhisek_mandal_11081999',
		count: '',
		email: '1929194@kiit.ac.in',
		roll_number: '1929194',
		numbers: [],
		alphabets: [],
	};


  try {
    data.forEach((item) => {
      for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
        if (item[i] >= 'A' && item[i] <= 'Z') {
          if (answer.alphabets.indexOf(item) === -1) answer.alphabets.push(item);
          totalCount++;
        }
        if (item[i] >= 'a' && item[i] <= 'z') {
          if (answer.alphabets.indexOf(item) === -1) answer.alphabets.push(item);
          totalCount++;
        }
        if (item[i] >= '0' && item[i] <= '9') {
          if (answer.numbers.indexOf(item) === -1) answer.numbers.push(item);
          totalCount++;
        }
      }
    });
  
    answer.count = totalCount;
  
    if (data.length == 0) answer.isSuccess = false;  
  }
  catch (err) {
    res.sendStatus(404);
  }

	

	res.send(answer);
};

const deflect = (req, res) => {
	res.redirect('/challenge');
};

module.exports = {
	sendCount,
	deflect,
};
