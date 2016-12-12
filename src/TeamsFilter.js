export class TeamsFilter{
	constructor(dictionary) {
		this.dictionary = dictionary !== undefined ? dictionary : {};	
	}

	toggle(teamID){
		this.dictionary[teamID] = !this.dictionary[teamID];
		return this;
	}

	isActive(teamID){
		return this.isEmpty() || this.dictionary[teamID];
	}

	isEmpty(){
		return Object.keys(this.dictionary) === 0;
	}

	clone(){
		return new TeamsFilter(this.dictionary);
	}
}