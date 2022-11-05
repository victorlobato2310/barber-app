import 'package:dio/dio.dart';

class RegisterUser {
  Future<String> call() async {
    var dio = Dio();

    var response = await dio
        .post('http://192.168.11.195:3000/api/v1/cadastraUsuario', data: {
      "nome": "Julioaaaa",
      "email": "julioaaaa@hotmail.com",
      "usuario": "julioaaaa500",
      "senha": "147258369"
    });

    return response.data.toString();
  }
}
