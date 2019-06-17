export const jsonParsing = (json) => {
  const { jobs } = json|| {};
  if (jobs) {
    let jobsList = [];
    jobs.forEach(job => {
      let jobObecjt = {
        id: job["id"],
        title: job["title"],
        company:companyStringFormation(job['company']),
        cities: citiesStringFormation(job["cities"]),
        countries: countryStringFormation(job["countries"]),
        isRemote: isRemote(job["remotes"])
      };
      jobsList.push(jobObecjt);
    });

    // console.log(jobsList);
    return jobsList;
  }
};

const companyStringFormation = company => {
  return company.name;
}

const citiesStringFormation = cities => {
  let cityString = [];
  cities.forEach(city => {
    cityString.push(city['name']);
  });
  return cityString.join(',') ? cityString.join(',') : 'N/A';
};

const countryStringFormation = countries => {
  let countryString = [];
  countries.forEach(country => {
    countryString.push(country['name']);
  });
  return countryString.join(',') ? countryString.join(',') : 'N/A';
};

const isRemote = remotes => {
	return remotes.length > 0 ? 'Yes':'No';
};
