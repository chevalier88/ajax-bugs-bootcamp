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

  const postBug = async (req, res) => {
    console.log(req.body);
    try {
      const newBug = await db.Bug.create({
        problem: req.body.problem,
        errorText: req.body.errorText,
        commit: req.body.commit,
        featureId: req.body.featureId,
      });

      console.log('newBug', newBug);
      res.send({ newBug });
    }
    catch (error) {
      console.log(error);
    }
  };

  return {
    index, oneBug, postBug,
  };
}
