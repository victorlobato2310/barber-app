import 'package:barber_app/errors/http_errors.dart';
import 'package:barber_app/model/account_model.dart';
import 'package:dio/dio.dart';

class RegisterUser {
  Future<Map> call(AccountModel accountModel) async {
    var dio = Dio();

    var response = await dio
        .post('http://192.168.11.195:3000/api/v1/cadastraUsuario', data: {
      "nome": accountModel.name,
      "email": accountModel.email,
      "usuario": accountModel.username,
      "senha": accountModel.password
    });
    return handleResponse(response);
  }

  Map handleResponse(Response response) {
    if (response.statusCode == 200) {
      return response.data;
    } else if (response.statusCode == 400) {
      throw HttpError.badRequest;
    } else {
      throw HttpError.serverError;
    }
  }
}
