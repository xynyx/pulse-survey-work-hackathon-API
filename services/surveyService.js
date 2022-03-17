import surveyRepo from "../repositories/surveyRepo.js";
import questionRepo from "../repositories/questionRepo.js";

export const getSurveys = async () => {
  const surveys = await surveyRepo.selectAll();

  var result = new Array();

  surveys.rows.map((survey) => {
    var obj = new Object();

    surveys.rowDescription.columns.map((el, i) => {
      obj[el.name] = survey[i];
    });
    result.push(obj);
  });

  return result;
};

export const getSurvey = async (surveyId) => {
  const surveys = await surveyRepo.selectById(surveyId);
  const questions = await questionRepo.selectBySurveyId(surveyId);

  var result = new Object();

  surveys.rows.map((survey) => {
    result = survey;
    result.questions = questions.rows.map((question) => ({id: question[0], question: question[2], }));
  });

  return result;
};

export const createSurvey = async (surveyData) => {
  const newSurvey = {
    name: String(surveyData.name),
    accountId: Number(surveyData.accountId),
  };

  const createdSurvey = await surveyRepo.create(newSurvey);

  return createdSurvey.rows[0].id;
};
