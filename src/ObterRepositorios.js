const axios = require(`axios`);
const { response } = require("express");


module.exports = {
    async ObterRepositorios(req, res) {
        var response = await axios.get("https://api.github.com/orgs/takenet/repos")
        data = response.data;

        data = data.filter(x => x.language == "C#");
        //data = data.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1);
        data = data.sort(x => x.created_at)
        data = data.map(x => { return { nome: x.full_name, descricao: x.description, avatar: x.owner.avatar_url } });
        data = data.slice(0, 5);

        return res.json(data);
    }
}