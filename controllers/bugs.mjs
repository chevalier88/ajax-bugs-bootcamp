export default function initBugsController(db) {
  const index = async (request, response) => {
    try {
      response.render('index');
    } catch (error) {
      console.log(error);
    }
  };

  const oneBug = async (req, res) => {
    try {
      const bug = await db.Bug.findOne({ where: { id: req.params.id } });
      res.send({ bug });
    } catch (error) {
      console.log(error);
    }
  };

  const post = async (req, res) => {
    console.log(req.body);
  };

  return {
    index, oneBug, post,
  };
}
