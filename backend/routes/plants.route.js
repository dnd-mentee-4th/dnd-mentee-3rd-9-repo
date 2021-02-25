const express = require('express');
const {
  getListPlants,
  getDetailPlant,
  curatingResult,
  searchByPlantName,
  searchByPlantTag,
} = require('../controllers/plant.controller');
const router = express.Router();

/**
 * @swagger
 * /plants:
 *   get:
 *     tags:
 *       - plants
 *     description: 모든 식물 리스트를 조회. 최신 및 인기순 정렬을 쿼리스트링으로 구현
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: api-key
 *         description: API 키를 넣어 호출해야 합니다.
 *         required: true
 *         in: header
 *         type: string
 *         example: 28308fa3aca32470631c27377bbc3f43:a17bf428d90e22d3232e8e95bc4c5b1f
 *       - name: order
 *         description: recent / view 두가지. recent는 최신순 view는 인기순
 *         in: query
 *         type: string
 *         example: view
 *     responses:
 *       200:
 *         description: 식물의 정보에 대한 배열을 반환합니다.
 *       401:
 *         description: 잘못된 API 키 응답
 */
router.get('/', getListPlants); //쿼리스트링. /plants?order=recent});

/**
 * @swagger
 * /plants/curating:
 *   get:
 *     tags:
 *       - plants
 *     description: 큐레이팅 결과 식물의 내용을 반환
 *     operationId: get test result
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: api-key
 *         description: API 키를 넣어 호출해야 합니다.
 *         required: true
 *         in: header
 *         type: string
 *         example: 28308fa3aca32470631c27377bbc3f43:a17bf428d90e22d3232e8e95bc4c5b1f
 *       - name: result
 *         description: 큐레이팅 결과 식물의 이름을 result 쿼리스트링에 전달
 *         in: query
 *         type: string
 *         example: "몬스테라"
 *     responses:
 *       200:
 *         description: 큐레이팅 결과 식물 반환
 */
router.get('/curating', curatingResult);

/**
 * @swagger
 * /plants/encyclopedia/keyword:
 *   post:
 *     tags:
 *       - plants
 *     description: 식물 이름 검색 내용을 반환
 *     parameters:
 *       - name: api-key
 *         description: API 키를 넣어 호출해야 합니다.
 *         required: true
 *         in: header
 *         type: string
 *         example: 28308fa3aca32470631c27377bbc3f43:a17bf428d90e22d3232e8e95bc4c5b1f
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     requestBody:
 *        content:
 *          application/json:
 *              schema:
 *               type: object
 *               properties:
 *                keyword:
 *                  type: string
 *               example:
 *                keyword: 몬스테라
 *     responses:
 *       200:
 *         description: 식물 이름 검색 내용을 반환
 */
router.post('/encyclopedia/keyword', searchByPlantName);

/**
 * @swagger
 * /plants/encyclopedia/tag:
 *   post:
 *     tags:
 *       - plants
 *     description: 태그 검색 내용을 반환
 *     parameters:
 *       - name: api-key
 *         description: API 키를 넣어 호출해야 합니다.
 *         required: true
 *         in: header
 *         type: string
 *         example: 28308fa3aca32470631c27377bbc3f43:a17bf428d90e22d3232e8e95bc4c5b1f
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     requestBody:
 *        content:
 *          application/json:
 *              schema:
 *               type: object
 *               properties:
 *                tags:
 *                  type: string
 *               example:
 *                tags: "#꽃,#열매"
 *     responses:
 *       200:
 *         description: 태그 검색 내용을 반환
 */
router.post('/encyclopedia/tag', searchByPlantTag);

/**
 * @swagger
 * /plants/{plantId}:
 *   get:
 *     tags:
 *       - plants
 *     description: 디테일 식물을 조회한다.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: api-key
 *         description: API 키를 넣어 호출해야 합니다.
 *         required: true
 *         in: header
 *         type: string
 *         example: 28308fa3aca32470631c27377bbc3f43:a17bf428d90e22d3232e8e95bc4c5b1f
 *       - name: plantId
 *         in: path
 *         description: 식물의 id를 path parameter로 주입한다.
 *         type: integer
 *         format: int64
 *         required: true
 *         example: 1
 *     responses:
 *       200:
 *         description: 식물의 디테일한 내용을 얻습니다.
 */
router.get('/:plantId', getDetailPlant); //for detail

module.exports = router;
