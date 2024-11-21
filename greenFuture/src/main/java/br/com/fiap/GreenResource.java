package br.com.fiap;
import br.com.fiap.DAO.EmpresaDAO;
import br.com.fiap.business.GreenBM;
import br.com.fiap.model.Cliente;
import br.com.fiap.model.Empresa;
import br.com.fiap.util.*;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;
import java.util.Map;

@Path("apiJava")
public class GreenResource
{
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("cadastro")
    public Response cadastro(ClienteTO c)
    {
        GreenBM negocio = new GreenBM();
        try
        {
            negocio.cadastro(c.toCliente());
            return Response.status(201).entity(c).build();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("cadastroEmpresa")
    public Response cadastroEmpresa(EmpresaTO e)
    {

        GreenBM negocio = new GreenBM();
        try
        {
            negocio.cadastroEmpresa(e.toEmpresa());
            return Response.status(201).entity(e).build();
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return Response.status(406).entity(ex.getMessage()).build();
        }
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("login")
    public Response login(LoginTO l) throws Exception {
        GreenBM negocio = new GreenBM();
        try
        {
            Map<String, Object> detalhesUsuario = negocio.login(l.toLogin());
            return  Response.status(201).entity(detalhesUsuario).build();
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return Response.status(406).entity(ex.getMessage()).build();
        }

    }


    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("calculaCarbono")
    public Response calculaCarbono(CarbonoTO c)
    {
        GreenBM negocio = new GreenBM();
        try
        {
            System.out.println(c.getCpf());
            negocio.calculaCarbono(c.toCarbono());

            return Response.status(201).entity(c).build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(406).entity(e.getMessage()).build();
        }
    }

    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("recuperaContas")
    public Response recuperaContas() throws Exception {
        EmpresaDAO e = new EmpresaDAO();
        try
        {
           List<Empresa> empresas = e.recuperaEmpresas();
            return  Response.status(201).entity(empresas).build();
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return Response.status(406).entity(ex.getMessage()).build();
        }

    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("alteraSenha")
    public Response alteraSenha(alteraSenhaTO as) throws Exception
    {
        GreenBM negocio = new GreenBM();
        try
        {
            negocio.alteraSenha(as.toLogin());
            return  Response.status(201).entity(as).build();
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return Response.status(406).entity(ex.getMessage()).build();
        }
    }

    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("apagarConta")
    public Response apagarConta(alteraSenhaTO as) throws Exception
    {
        GreenBM negocio = new GreenBM();
        try
        {
            negocio.deletarConta(as.toLogin());
            return  Response.status(201).entity(as).build();
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return Response.status(406).entity(ex.getMessage()).build();
        }
    }




}
